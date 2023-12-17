import Navegate from "../navegate/navegate";
import variables from "../../../variables.module.scss"
import Group from "../group1/group";

export default function Header() {
   return(
      <>
         <div style={{ background: variables.Background, width:variables.headerWidth,height:variables.headerHeight, }}>
            <Navegate/>
            <Group/>
         </div>
      </>
   )
}