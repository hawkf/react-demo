import React from "react";
import logo from "./logoCompany.png";

export function Header() {
  return (
    <header className='page-header'>
      <div>
        <img src={logo} height='40px' width='350px' alt='Логотип компании' />
      </div>
      <p className='page-header__history'>
        Чверть століття тому було покладено початок великого шляху. Сьогодні ми
        також сміливі, як і на самому початку.
      </p>
    </header>
  );
}
