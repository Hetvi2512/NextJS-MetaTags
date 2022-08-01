import React from 'react';
import { useRouter } from 'next/router'

function BottomMenu(props) {
  const router = useRouter()

    return (
        <div className="nav-options">

        <a className="ant-dropdown-link cursor-pointer Biotif-Regular" onClick={() =>  router.push('/style', undefined, { shallow: true })}>
        STYLE ↓
        </a>

       <a className="ant-dropdown-link cursor-pointer Biotif-Regular" onClick={() =>  router.push('/self', undefined, { shallow: true })}>
         SELF ↓
       </a>

       <a className="ant-dropdown-link cursor-pointer Biotif-Regular" onClick={() =>  router.push('/culture', undefined, { shallow: true })}>
         CULTURE ↓
       </a>

       <a className="ant-dropdown-link cursor-pointer Biotif-Regular" onClick={() =>  router.push('/community', undefined, { shallow: true })}>
         COMMUNITY ↓
       </a>

</div>
    );
}

export default BottomMenu;