import PropTypes from 'prop-types';
import { Pagination } from 'antd';
import { useEffect, useState } from 'react';
import axios from 'axios';
import CompanyCard from '../../components/common/cards/CompanyCard';
import JobCard from '../../components/common/cards/JobCard';
import Filter from './Filter';
import './searchstyle.css';

function Search({ match }) {
  const [rows, setRows] = useState([]);
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
    axios.post('/api/v1/search', data).then(
      (res) => {
        setRows(res.data);
      },
    );
  };

  useEffect(() => {
    axios.post('/api/v1/search', {
      type: match.params.category,
    }).then(
      (res) => {
        setRows(res.data);
      },
    );
  }, []);

  return (
    <div className="wrapper_search">
      <Filter
        typeFind={match.params.category}
        handleSearch={handleSearch}
        handleInfos={handleInfos}
      />

      {
          setRows.length > 0
            ? (
              <div className="wrapper_cads_companyes">
                {
                  data.type === 'jobs'
                    ? rows.map((card) => <JobCard data={card} />)
                    : rows.map((card) => <CompanyCard data={card} />)
                  }
              </div>
            )
            : null
          }

      <div className="bowl_pagination">
        <Pagination defaultCurrent={1} total={50} />
      </div>
    </div>
  );
}

Search.propTypes = {
  match: PropTypes.object.isRequired,
};
export default Search;
