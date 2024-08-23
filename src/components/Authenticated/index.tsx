import Logo from "@assets/svg/logo.svg";
import SideNav from "./SideNav";
import { Fragment } from "react";
import { Drawer } from "@mantine/core";
import { Route, Routes } from "react-router-dom";
import { useDisclosure } from "@mantine/hooks";
import Header from "./Header";
import Dashboard from "@pages/Authenticated/Dashboard";
import CallHistory from "@pages/Authenticated/CallHistory";

const Authenticated = () => {
  const [opened, { open, close }] = useDisclosure();

  return (
    <Fragment>
      <Drawer opened={opened} onClose={close}>
        <div className="flex-1">
          <SideNav close={close} />
        </div>
      </Drawer>
      <div className="flex items-start ">
        <div
          className={`hidden max-w-[230px] lg:flex flex-col sticky pb-7 top-0 min-h-screen bg-white w-full px-5 duration-300 `}
        >
          <div className={`flex justify-center items-center gap-2 py-3 mt-5 `}>
            <img src={Logo} alt="" className={``} />
          </div>
          <div className="hidden lg:grid gap-4 mt-5 flex-1 h-full">
            <SideNav close={close} />
          </div>
        </div>

        <div className="w-full min-h-screen px-5 lg:px-10 pb-10 overflow-hidden">
          <Header open={open} />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/call-history" element={<CallHistory />} />
          </Routes>
        </div>
      </div>
    </Fragment>
  );
};

export default Authenticated;
