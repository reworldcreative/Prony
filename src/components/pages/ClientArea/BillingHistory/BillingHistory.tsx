import React, { FC, useContext, useEffect, useState } from "react";
import "./BillingHistory.scss";
import { GlobalContext } from "@/components/widgets/GlobalContext/GlobalContext";
import BillingHistoryData from "@/data/BillingHistory.json";
import Pagination from "@/components/UI/Pagination/Pagination";

const BillingHistory: FC = () => {
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

  useEffect(() => {
    setBreadcrumbsLinks(["/history"]);
    setBreadcrumbsTitles(["Billing History"]);
  }, []);

  const [BillingHistoryList, setBillingHistoryList] = useState([...BillingHistoryData]);
  const [perPage, setPerPage] = useState<string>("10");
  const billingsPerPage: number = parseInt(perPage);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const indexOfLastBilling: number = currentPage * billingsPerPage;
  const indexOfFirstBilling: number = indexOfLastBilling - billingsPerPage;
  const currentBillings = BillingHistoryList.slice(indexOfFirstBilling, indexOfLastBilling);

  const paginate = (pageNumber: number) => {
    pageNumber > 0 &&
      pageNumber <= Math.ceil(BillingHistoryList.length / billingsPerPage) &&
      setCurrentPage(pageNumber);
  };

  return (
    <div className="billing-history">
      <h1 className="title clientPage__main-title billing-history__title">Billing History</h1>

      <div className="clientPage__container billing-history__container">
        <div className="billing-history__top">
          <h2 className="billing-history__top-title">Transaction date</h2>

          <h2 className="billing-history__top-title">Amount</h2>
        </div>

        <div className="billing-history__list">
          {currentBillings.map((item, index) => (
            <div className="billing-history__item" key={index}>
              <p className="billing-history__text">{item.date}</p>
              <p className="billing-history__text">${item.price}</p>
            </div>
          ))}
        </div>

        <Pagination
          paginate={paginate}
          currentPage={currentPage}
          totalPages={Math.ceil(BillingHistoryList.length / billingsPerPage)}
        />
      </div>
    </div>
  );
};

export default BillingHistory;
