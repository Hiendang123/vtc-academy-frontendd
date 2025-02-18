import React from "react";
import MyTam from "./list-music/my-tam";
import HoNgonHa from "./list-music/ho-ngon-ha";
import QuangHung from "./list-music/masterD";
import SonTung from "./list-music/MTP";
import DucPhuc from "./list-music/Duc-Phuc";
import Justin from "./list-music/Justin";

function List() {
  return (
    <div>
      <MyTam />
      <HoNgonHa />
      <QuangHung />
      <SonTung />
      <DucPhuc />
      <Justin />
    </div>
  );
}

export default List;
