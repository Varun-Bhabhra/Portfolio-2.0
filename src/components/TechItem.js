import React from "react";

// Imgs

const TechItem = ({ item }) => {
  return (
    <aside className="inline-block mt-6  rounded-lg py-1 font-jost font-medium pr-4 text-secondary">
      <i className="fa-solid fa-circle text-xs pr-2"></i>
      {item}
    </aside>
  );
};

export default TechItem;
