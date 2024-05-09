import React, { FC, useContext, useEffect, useState } from "react";
import "./BillingPlan.scss";
import { GlobalContext } from "@/components/widgets/GlobalContext/GlobalContext";
import checkIcon from "@icons/check.svg";
import BillingItem, { BillingItemData } from "./BillingItem/BillingItem";
import BillingPlansData from "@/data/BillingPlans.json";

const BillingPlan: FC = () => {
  const {
    breadcrumbsLinks,
    setBreadcrumbsLinks,
    breadcrumbsTitles,
    setBreadcrumbsTitles,
    isOpenPopUp,
    setOpenPopUp,
    popUpData,
    setPopUpData,
  } = useContext(GlobalContext);

  const [currentPlan, setCurrentPlan] = useState<string>("Free");
  const [daysToPay, setDaysToPay] = useState<string>("X");
  const [BillingPlansList, setBillingPlansList] = useState<BillingItemData[]>([...BillingPlansData]);
  const [currentPlanData, setCurrentPlanData] = useState<BillingItemData>(
    BillingPlansList.find((plan) => plan.name === currentPlan)
  );

  useEffect(() => {
    setBreadcrumbsLinks(["/billing"]);
    setBreadcrumbsTitles(["Billing Plan"]);
    currentPlanData.BillingDate === "" && setInfoStyle({ display: "flex" });

    BillingPlansList.map((plan) => {
      const dayToPay = calculateDays(plan.BillingDate);
      dayToPay === 0 ? (plan.BillingDate = "") : false;
    });

    setBillingPlansList([...BillingPlansList]);
  }, []);

  const [infoStyle, setInfoStyle] = useState({
    display: "none",
  });

  useEffect(() => {
    parseInt(daysToPay, 10) < 7 && setInfoStyle({ display: "flex" });
  }, [daysToPay]);

  const selectPlan = (data: BillingItemData) => {
    setCurrentPlan(data.name);
    setCurrentPlanData(data);
    setInfoStyle({ display: "none" });
    setBillingPlansList(BillingPlansList.map((plan) => (plan.name === data.name ? data : plan)));
    countDaysToPay(data.BillingDate);
  };

  function calculateDays(data: string) {
    const [monthStr, yearStr] = data.split("/");
    const month = parseInt(monthStr, 10);
    const year = parseInt(yearStr, 10);
    const fullYear = year < 100 ? 2000 + year : year;
    const date = new Date(fullYear, month - 1, 1);
    const today = new Date();
    const diffInMillis = date.getTime() - today.getTime();
    const millisPerDay = 24 * 60 * 60 * 1000;
    const diffInDays = Math.ceil(diffInMillis / millisPerDay);

    return diffInDays;
  }

  const countDaysToPay = (paymentData: string = "01/25") => {
    const diffInDays = calculateDays(paymentData);
    setDaysToPay(diffInDays.toString());
  };

  return (
    <div className="billing-plan">
      <h1 className="title clientPage__main-title billing-plan__title">Billing Plan</h1>

      <div className="billing-plan__container">
        <div className="text-second billing-plan__info client-info danger" style={infoStyle}>
          <img
            src={checkIcon}
            alt="info icon"
            className="billing-plan__icon client-info__icon"
            width="18"
            height="18"
            aria-hidden="true"
          />
          Your Trial expires in {daysToPay} days. You can always buy a plan before the trial period ends
        </div>

        <div className="billing-plan__current">
          <p className="input__label text billing-plan__label">Your plan</p>

          <BillingItem data={currentPlanData} />
        </div>

        <div className="billing-plan__list">
          <p className="input__label text billing-plan__label">Available plans</p>

          <div className="billing-plan__list-wrapper">
            {BillingPlansList.filter((plan) => plan.name !== currentPlan).map((plan, index) => (
              <BillingItem key={index} data={plan} planSelect={selectPlan} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BillingPlan;
