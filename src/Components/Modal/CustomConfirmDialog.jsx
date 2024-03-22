import PropTypes from "prop-types";
const CustomConfirmDialog = ({ open, onClose, onConfirm, title, children }) => {
  return (
    <div
      onClick={() => {
        onClose();
        onConfirm();
      }}
      className={`fixed w-full h-full top-0 left-0 flex justify-center items-center transition-colors duration-300 z-[60] py-10 confirm-dialog rounded-xl ${
        open ? "visible backdrop-blur" : "invisible"
      }`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`bg-primary-bg/60 rounded-xl shadow transition-all drop-shadow-2xl backdrop-blur ${
          open ? "scale-100 opacity-100" : "scale-125 opacity-0"
        }`}
      >
        {" "}
        <div className=" rounded-lg md:max-w-md md:mx-auto p-4 fixed inset-x-0 bottom-0 z-50 mx-4 md:relative shadow-lg">
          <div className="md:flex items-center">
            <div className="mt-0 md:mx-6 text-center md:text-left space-y-3">
              {title}
              {children}
            </div>
          </div>
          <div className="text-center md:text-right mt-4 md:flex md:justify-end">
            <button
              id="confirm-cancel-btn"
              className="inline-block w-auto p-2 rounded-lg font-semibold text-sm mt-4 mt-0 order-1"
              onClick={() => {
                onClose();
                onConfirm();
              }}
            >
              close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

CustomConfirmDialog.propTypes = {
  children: PropTypes.element,
  onClose: PropTypes.func,
  onConfirm: PropTypes.func,
  open: PropTypes.bool,
  title: PropTypes.element,
};

export default CustomConfirmDialog;
