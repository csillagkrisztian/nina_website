import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import data from "../data";
import { ABOUT_ME, GRAPHIC_DESIGN, ILLUSTRATIONS } from "../routes";
import { setLocation } from "../redux/actions/actions";
import { getLanguage, getLoading } from "../redux/selectors/selectors";
import Title from "./components/Title";

export default function HomePage() {
  const dispatch = useDispatch();
  const language = useSelector(getLanguage);
  const loading = useSelector(getLoading);

  return loading || !language ? (
    <h1>LOADING...</h1>
  ) : (
    <div className="parent">
      <Title fontSize={60} text={data[language].title} />
      <Link className="one" to={`/work/${ILLUSTRATIONS}`}></Link>
      <Link className="two" to={`/work/${GRAPHIC_DESIGN}`} />
      <Link className="three" to={`/${ABOUT_ME}`} />
    </div>
  );
}
