import { SearchOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';
import { useState } from 'react';

function Filter({ handleSearch, handleInfos, typeFind }) {
  const [typeSearch, setTypeSearch] = useState(typeFind);
  const handleInfosType = (e) => {
    setTypeSearch(e.target.value);
  };
  return (
    <form className="form_fitler_Search" onSubmit={handleSearch}>
      <div className="bowl_input input_query">
        <input
          type="text"
          placeholder="Aa..."
          name="query"
          onChange={handleInfos}
        />
        <SearchOutlined />
      </div>
      <div className="bowl_input">
        <select
          name="type"
          onChange={handleInfos}
          onInput={handleInfosType}
        >
          <option value="jobs" selected>Jobs</option>
          <option value="company">Company</option>
          <option value="" disabled selected>Type</option>
        </select>
      </div>
      {
        // eslint-disable-next-line no-nested-ternary
        typeSearch === 'company'
          ? (
            <div className="bowl_input">
              <select
                id="rateLabel"
                name="rate"
                onChange={handleInfos}
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="" disabled selected>Rate</option>
              </select>
            </div>
          )
          : typeSearch === 'jobs'
            ? (
              <>
                <div className="bowl_input_company">
                  <input
                    type="text"
                    placeholder="Category"
                    name="category"
                    onChange={handleInfos}
                  />
                </div>
                <div className="bowl_input_company">
                  <input
                    type="text"
                    placeholder="Date"
                    name="date"
                    onChange={handleInfos}
                  />
                </div>
                <div className="bowl_input_company">
                  <input
                    type="text"
                    placeholder="Salary"
                    name="salary"
                    onChange={handleInfos}
                  />
                </div>
              </>
            )
            : null
        }
      <div className="bowl_input bowl_loaction">
        <input
          type="text"
          placeholder="Location"
          name="location"
          onChange={handleInfos}
        />
      </div>
      <div className="bowl_input">
        <button type="submit">Search</button>
      </div>
    </form>
  );
}

Filter.propTypes = {
  handleSearch: PropTypes.func.isRequired,
  handleInfos: PropTypes.func.isRequired,
  typeFind: PropTypes.string.isRequired,
};

export default Filter;
