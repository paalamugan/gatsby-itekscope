import { Link as UILink } from "@chakra-ui/react";
import { Link } from "gatsby";
import React from "react";
import { HERO_LISTS } from "../../constants";

import "./NavigationDots.scss";

interface NavigationDotsProps {
  active: string;
}

const NavigationDots = ({ active }: NavigationDotsProps) => {
  return (
    <div className={"app__navigation"}>
      {HERO_LISTS.map(list => (
        <UILink
          as={Link}
          key={list.id}
          to={`#${list.id}`}
          title={list.title}
          className={"app__navigation-dot"}
          style={{
            backgroundColor: active === list.id ? "var(--chakra-colors-primary)" : "",
          }}
        />
      ))}
    </div>
  );
};

export default NavigationDots;
