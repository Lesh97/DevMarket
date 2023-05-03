import { faDev } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "gatsby";
import React from "react";

interface ILayoutProps {
  children: any;
  title: string;
}

export default function Layout({ children, title }: ILayoutProps) {
  return (
    <div className="container">
      <nav>
        <ul>
          <li>
            <Link to="/">
              <FontAwesomeIcon icon={faDev} size="3x" />
            </Link>
          </li>
          <li>
            <Link to="/monitor">모니터</Link>
          </li>
          <li>
            <Link to="/mouse">마우스</Link>
          </li>
          <li>
            <Link to="/keyboard">키보드</Link>
          </li>
          <li>
            <Link to="/camera">카메라</Link>
          </li>
          <li>
            <Link to="/mic">마이크</Link>
          </li>
          <li>
            <Link to="/bluetooth">블루투스 기기</Link>
          </li>
          <li>
            <Link to="/about-us">About-us</Link>
          </li>
          <li>
            <Link to="/blog">공지사항</Link>
          </li>
        </ul>
      </nav>
      <main>
        <h1>{title}</h1>
        {children}
      </main>
    </div>
  );
}
