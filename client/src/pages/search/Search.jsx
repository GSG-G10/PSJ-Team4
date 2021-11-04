import PropTypes from 'prop-types';
import { Pagination } from 'antd';
import { useState } from 'react';
import CompanyCard from '../../components/common/cards/CompanyCard';
import JobCard from '../../components/common/cards/JobCard';
import Filter from './Filter';
import './searchstyle.css';

function Search({ match }) {
  const [data, setData] = useState({
    query: '',
    type: '',
    rate: '',
    category: '',
    date: '',
    salary: '',
    location: '',
  });

  const handleInfos = (e) => {
    const names = e.target.name;
    const { value } = e.target;
    const statusCopy = { ...data };
    statusCopy[names] = value;
    setData(statusCopy);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log();
  };

  return (
    <div className="wrapper_search">
      <Filter
        typeFind={match.params.category}
        handleSearch={handleSearch}
        handleInfos={handleInfos}
      />
      <div className="wrapper_cads_companyes">
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <CompanyCard />
        <CompanyCard />
        <CompanyCard />
        <CompanyCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <CompanyCard />
        <CompanyCard />
        <CompanyCard />
        <CompanyCard />
      </div>
      <div className="bowl_pagination">
        <Pagination defaultCurrent={1} total={50} />
      </div>
    </div>
  );
}

Search.propTypes = {
  match: PropTypes.func.isRequired,
};
export default Search;
