import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles1 from "../styles/common.module.css";
import styles2 from "../styles/header.module.css";
import { Typography } from "@material-ui/core";
import { useRouter } from "next/router";

const linkPaths = [
  {
    href: "/",
    linkName: "Home",
  },
  {
    href: "/about",
    linkName: "About",
  },
  {
    href: "/fruits",
    linkName: "Fruits",
  },
];

export default function Header() {
  const router = useRouter();

  //console.log(router);

  const [active, setActive] = React.useState(
    Array.from(linkPaths, (x, i) => {
      if (router.route.localeCompare(x.href) === 0) {
        return true;
      }
      return false;
    })
  );
  console.log(active);
  const handleLinkClick = (index) => {
    setActive(
      Array.from(linkPaths, (x, i) => {
        if (i === index) {
          return true;
        }
        return false;
      })
    );
  };

  return (
    <header className={`${styles1.container} ${styles2.container}`}>
      <div>
        <Image src="/logo.jpg" height={100} width={150} />
      </div>
      <Typography variant={"h2"}>{`Fruits A to Z`}</Typography>
      <div className={styles2.linkContainer}>
        {linkPaths.map((obj, index) => {
          return (
            <Link href={obj.href} key={`link-${index}`}>
              <a
                className={`${styles1.linkItem} ${
                  active[index] ? styles1.active : ""
                }`}
                onClick={() => handleLinkClick(index)}
              >
                {obj.linkName}
              </a>
            </Link>
          );
        })}
      </div>
    </header>
  );
}
