import { useState, useEffect } from 'react';

import SearchBox from './SearchBox';
import FeatureCommunities from './FeatureCommunities';

import { realTimeDb } from '../firebase';

const HomeMain = () => {
  const [communities, setCommunities] = useState([]);

  useEffect(() => {
    search();
  }, []);

  const search = (keywords = null) => {
    const name = keywords && keywords.length ? keywords : '';

    realTimeDb.ref().child('servers').orderByChild('name').startAt(name).endAt(name + "\uf8ff").on("value", function (snapshot) {
      const servers = snapshot.val();
      if (servers && servers.length !== 0) {
        const keys = Object.keys(servers);
        const communities = keys.map(key => servers[key]);
        setCommunities(() => communities);
      } else { 
        setCommunities(() => []);
      }
    });
  };

  return (
    <div className="home__main">
      <SearchBox onSearched={search} />
      <FeatureCommunities communities={communities} />
    </div>
  );
};
export default HomeMain;