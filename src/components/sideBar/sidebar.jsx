import React, { useEffect, useState } from "react";
import * as S from "./sidebar.styled";
import { FaTimes } from "react-icons/fa";
import { TfiMenuAlt } from "react-icons/tfi";

const Sidebar = ({ active }) => {
  const [info, setInfo] = useState({});
  useEffect(() => {
    fetch(
      `https://kitsu.io/api/edge/categories?page[limit]=40&page[offset]=0&sort=-total_media_count`
    )
      .then((resp) => resp.json())
      .then((response) => {
        setInfo(response);
      });
  }, []);

  const closeSidebar = () => {
    active(false);
  };

  return (
    <S.Container sidebar={active} scroll={`${document.body.scrollHeight}px`}>
      <FaTimes onClick={closeSidebar} />
      <S.Content scroll={`${document.body.scrollHeight}px`}>
        <h1 className="title">
          <TfiMenuAlt /> Categorias
        </h1>
        {info.data && (
          <ul>
            <li onClick={() => (window.location.href = "/")}>Home</li>
            {info.data.map((category) => (
              <li
                key={category.id}
                onClick={() =>
                  (window.location.href = `/${category.attributes.slug}`)
                }
              >
                {category.attributes.title}
              </li>
            ))}
          </ul>
        )}
      </S.Content>
    </S.Container>
  );
};

export default Sidebar;
