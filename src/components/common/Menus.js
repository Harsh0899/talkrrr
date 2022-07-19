import { useContext, useState } from 'react';
import { useHistory } from 'react-router';
import Menu from './Menu';
import Context from '../../context';

const Menus = () => {
  const { cometChat, selectedMenu, setSelectedMenu, setSelectedFriend, setSelectedChannel, setSelectedChannelType, serverList, setServerList, serverCount, setServerCount } = useContext(Context);
  const [list, setList] = useState([
    {
      id: 1,
      name: 'home',
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" fill="currentColor" className="bi bi-house-door" viewBox="0 0 16 16">
              <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5z"/>
            </svg>
    },
    {
      id: 2,
      name: 'server1',
      icon: <svg xmlns="http://www.w3.org/2000/svg" style={{width: '1.5rem', height: '1.5rem'}} className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" /></svg>
    },
    {
      id: 98, 
      name: 'logout',
      icon: <svg style={{width: '1.5rem', height: '1.5rem'}} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg>
    },
    {
      id: 99,
      name: 'add-server', 
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" fill="currentColor" className="bi bi-plus-circle" viewBox="0 0 16 16">
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
              <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
            </svg>
    }
  ]);
  const history = useHistory();

  // const list = [
  //   {
  //     id: 1,
  //     icon: <svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" fill="currentColor" class="bi bi-house-door" viewBox="0 0 16 16">
  //             <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5z"/>
  //           </svg>
  //   },
  //   {
  //     id: 2,
  //     icon: <svg xmlns="http://www.w3.org/2000/svg" style={{width: '1.5rem', height: '1.5rem'}} className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" /></svg>
  //   },
  //   {
  //     id: 3, 
  //     icon: <svg style={{width: '1.5rem', height: '1.5rem'}} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg>
  //   },
  //   {
  //     id: 4, 
  //     icon: <svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" fill="currentColor" class="bi bi-plus-circle" viewBox="0 0 16 16">
  //             <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  //             <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
  //           </svg>
  //   }
  // ];

  const logout = async () => {
    const isLogout = window.confirm('Do you want to logout?');
    if (isLogout) {
      await cometChat.logout();
      setSelectedMenu(4);
      setSelectedFriend(null);
      setSelectedChannel(null);
      setSelectedChannelType(null);
      localStorage.removeItem('auth');
      history.push('/login');
    }
  };

  const addServer = () => {
    const isConfirm = window.confirm('Do you want to add a new server?');
    if(!isConfirm) {
      return;
    }
    const newServerCount = serverCount+1;
    const newServerList = [...serverList, `server${newServerCount}`];
    let server = {
      id: newServerCount+1,
      name: `server${newServerCount}`,
      icon: <svg xmlns="http://www.w3.org/2000/svg" style={{width: '1.5rem', height: '1.5rem'}} className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" /></svg>
    };
    let tempList = [...list];
    tempList.splice(-2, 0, server);
    setList(tempList);
    setServerCount(newServerCount);
    setServerList(newServerList);
    setSelectedMenu(1);
    history.push('/');
    // console.log(list);
    // console.log(serverCount);
    // console.log(serverList);
  }

  const onItemSelected = (item) => () => {
    setSelectedMenu(() => item.id);
    if (item.name.valueOf() === 'home'.valueOf()) {
      history.push('/');
    } else if (item.name.valueOf() === 'logout'.valueOf()) {
      logout();
    } else if (item.name.valueOf() === 'add-server'.valueOf()) {
      addServer();
    } else {
      history.push(`${item.name}`);
    }
  };

  return (
    <div className="menu">
      {list.map(item => <Menu key={item.id} isActive={item.id === selectedMenu} onItemSelected={onItemSelected} item={item} />)}
    </div>
  );
};
export default Menus;