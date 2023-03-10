import Header from "@/shared/layout/header";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styled from "styled-components";

const Redirect = () => {
  const router = useRouter();

  const [calledPush, setCalledPush] = useState(false);

  const url = router.asPath.replace("/redirect?url=", "");

  useEffect(() => {
    if (calledPush) {
      return;
    }

    router.push(url);
    setCalledPush(true);
  }, [calledPush]);

  return <></>;
};

export default Redirect;
