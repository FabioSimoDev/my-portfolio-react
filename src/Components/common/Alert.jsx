import PropTypes from "prop-types";
import { FaRegCheckCircle } from "react-icons/fa";
import { VscError } from "react-icons/vsc";
import { IoInformationCircleOutline } from "react-icons/io5";
import alertTypes from "../../Utils/alertTypes";

const Alert = ({
  title = "success",
  content = "action completed",
  type = alertTypes.SUCCESS
}) => {
  switch (type) {
    case alertTypes.SUCCESS:
      return (
        <div className="flex gap-2 bg-gradient-to-br from-[#175553] via-[#175553] to-[#43D9AD]/10 text-black brightness-150 p-4 rounded-lg shadow-lg">
          <FaRegCheckCircle size={40} />
          <div>
            <h3 className="font-bold">{title}</h3>
            <p className="text-sm">{content}</p>
          </div>
        </div>
      );
    case alertTypes.ERROR:
      return (
        <div className="flex gap-2 bg-gradient-to-br from-[#E99287] via-[#E99287] to-[#C98BDF]/10 brightness-75 text-white p-4 rounded-lg shadow-lg">
          <VscError size={40} />
          <div>
            <h3 className="font-bold">{title}</h3>
            <p className="text-sm">{content}</p>
          </div>
        </div>
      );
    case alertTypes.INFO:
      return (
        <div className="flex gap-2 bg-gradient-to-br from-blue-500 via-blue-900 to-[#C98BDF]/10 text-white p-4 rounded-lg shadow-lg">
          <IoInformationCircleOutline size={40} />
          <div>
            <h3 className="font-bold">{title}</h3>
            <p className="text-sm">{content}</p>
          </div>
        </div>
      );
    default:
      return <></>;
  }
};

Alert.propTypes = {
  content: PropTypes.string,
  title: PropTypes.string,
  type: PropTypes.string
};

export default Alert;
