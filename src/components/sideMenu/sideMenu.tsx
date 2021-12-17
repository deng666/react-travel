import React from "react";
import styles from "./sideMenu.module.css"
import { sideMounList } from "./mockup"
import { Menu } from 'antd'
import { GifOutlined } from "@ant-design/icons";

export const SideMenu:React.FC = () => {
  return <Menu mode='vertical' className={styles['side-menu']}>
    				{sideMounList.map((m, index) => (
          	<Menu.SubMenu key={`side-menu-${index}`}
           		  title={<span>{m.title}</span>}>
            		{m.subMon.map((n, infoIndex) => (
                	<Menu.SubMenu key={`sub-menu-${infoIndex}`} 
                		title={<span>{n.title}</span>}>
                    {n.subMenu.map((z, smsIndex) => (
                      <Menu.Item
                        key={`sub-sub-menu-${smsIndex}`}>
                        <span>{z}</span>
                      </Menu.Item>
                    ))}
            			</Menu.SubMenu>
           			))}
        		</Menu.SubMenu>
        		))}
    			</Menu>
}