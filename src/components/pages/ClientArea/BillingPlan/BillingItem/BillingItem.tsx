import React, { FC } from "react";
import "./BillingItem.scss";

export interface BillingItemData {
  name: string;
  Suggestions: number;
  TeamMembers: number;
  Price: number;
  BillingDate: string;
  color: string;
}

interface BillingItemProps {
  data: BillingItemData;
  planSelect?: (data: BillingItemData) => void;
}

const BillingItem: FC<BillingItemProps> = ({ data, planSelect }) => {
  const handleSetPlan = () => {
    const now = new Date();
    now.setMonth(now.getMonth() + 1);

    const nextMonth = (now.getMonth() + 1).toString().padStart(2, "0");
    const nextYear = now.getFullYear().toString().slice(-2);
    planSelect({ ...data, BillingDate: `${nextMonth}/${nextYear}` });
  };

  return (
    <div className="clientPage__container billing-item" style={{ borderColor: data.color }}>
      <div className="billing-item__block">
        <p className="billing-item__label">Plan</p>
        <p className="billing-item__text">{data.name}</p>
      </div>

      <div className="billing-item__block">
        <p className="billing-item__label">Suggestions</p>
        <p className="billing-item__text">{data.Suggestions}</p>
      </div>

      <div className="billing-item__block">
        <p className="billing-item__label">Team members</p>
        <p className="billing-item__text">{data.TeamMembers}</p>
      </div>

      <div className="billing-item__block">
        <p className="billing-item__label">Price</p>
        <p className="billing-item__text">{data.Price === 0 ? "Free" : `$${data.Price}/mo`}</p>
      </div>

      {data.BillingDate !== "" || data.name === "Free" ? (
        <div className="billing-item__block">
          <p className="billing-item__label">Billing date</p>
          <p className="billing-item__text">{data.name === "Free" ? "None" : data.BillingDate}</p>
        </div>
      ) : (
        <button
          className="billing-item__block heading-h6 billing-item__button"
          style={{ background: data.color }}
          onClick={() => handleSetPlan()}
        >
          Buy now
        </button>
      )}
    </div>
  );
};

export default BillingItem;
