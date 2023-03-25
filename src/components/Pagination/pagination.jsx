import React from "react";
import { Button, ContainerButton } from "./pagination.styled";
import ArrowR from "../../assets/images/arrow-right.png";
import ArrowL from "../../assets/images/arrow-left.png";

const Pagination = ({ limit, total, offset, setOffset }) => {
  const current = offset ? offset / limit + 1 : 1;
  const pages = Math.ceil(total / limit);

  function onPageChange(page) {
    setOffset((page - 1) * limit);
  }

  return (
    <ContainerButton>
      <div className="btPrevious">
        <Button
          onClick={() => onPageChange(current - 1)}
          disabled={current === 1}
        >
          <img src={ArrowL} alt="Arrow Right" />
        </Button>
      </div>
      <div className="btNext">
        <Button
          onClick={() => onPageChange(current + 1)}
          disabled={current === pages}
        >
          <img src={ArrowR} alt="Arrow Right" />
        </Button>
      </div>
    </ContainerButton>
  );
};

export default Pagination;
