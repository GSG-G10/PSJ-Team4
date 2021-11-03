import {
  Button, Row, Image, Typography,
} from 'antd';
import '../style.css';
import PropTypes from 'prop-types';
import { Logo } from '../../../../assets';

const {
  Title, Paragraph,
} = Typography;

function TypeAccount({ handleTypeUser, setIsSelectType }) {
  const handleType = (type) => {
    handleTypeUser(type);
    setIsSelectType(true);
  };
  return (
    <div>
      <div className="icon_jsjobs">
        <Image
          preview={false}
          width={60}
          src={Logo}
        />
        <Title level={4}>Account type</Title>
      </div>
      <Row className="pargraph">
        <div className="section_info_log">
          <Title level={4}>Company</Title>
          <Paragraph>
            We are the market-leading technical
            interview platform to identify and hire
            developers wherever they are.
          </Paragraph>
        </div>
        <div className="section_info_log">
          <Title level={4}>Employee</Title>
          <Paragraph>
            Join over thousands practice coding skills,
            prepare for Interviews and get hired.
          </Paragraph>
        </div>
      </Row>

      <div className="footer_btns">
        <Button
          key="submit1"
          type="primary"
          onClick={() => handleType('company')}
        >
          As a company
        </Button>
        <Button
          key="submit2"
          type="primary"
          onClick={() => handleType('employee')}
        >
          As an employee
        </Button>
      </div>
    </div>
  );
}

TypeAccount.propTypes = {
  handleTypeUser: PropTypes.func.isRequired,
  setIsSelectType: PropTypes.func.isRequired,
};

export default TypeAccount;
