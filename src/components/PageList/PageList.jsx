import React, { useState } from "react";
import "./PageList.css";
import Checkbox from "../Checkbox/Checkbox";

const PageList = () => {
  const [pages, setPages] = useState([
    { id: 1, name: "Page 1", checked: false },
    { id: 2, name: "Page 2", checked: false },
    { id: 3, name: "Page 3", checked: false },
    { id: 4, name: "Page 4", checked: false },
  ]);

  const handleCheckboxChange = (id) => {
    const newPages = pages.map((page) =>
      page.id === id ? { ...page, checked: !page.checked } : page
    );
    setPages(newPages);
  };

  const handleAllPagesCheckbox = () => {
    const allChecked = pages.every((page) => page.checked);
    const newPages = pages.map((page) => ({ ...page, checked: !allChecked }));
    setPages(newPages);
  };

  return (
    <div className="page_list">
      <div className="page_list_item" onClick={handleAllPagesCheckbox}>
        <div className="page_list_itemtext">All Pages</div>
        <div className="page_list_itemcheck">
          <Checkbox
            checked={pages.every((page) => page.checked)}
            onChange={handleAllPagesCheckbox}
          />
        </div>
      </div>
      <div className="list_divider"></div>
      {pages.map((page) => (
        <div
          key={page.id}
          className="page_list_item"
          onClick={() => handleCheckboxChange(page.id)}
        >
          <div className="page_list_itemtext">{page.name}</div>
          <div className="page_list_itemcheck">
            <Checkbox
              checked={page.checked}
              onChange={() => handleCheckboxChange(page.id)}
            />
          </div>
        </div>
      ))}
      <div className="list_divider"></div>
      <div className="page_list_btn"> Done</div>
    </div>
  );
};

export default PageList;
