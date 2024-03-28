import epicodeLogo from "../../assets/epicodeLogo.png";
import graduation from "../../assets/certificates/graduation.pdf";
const CertificatePreview = () => {
  // TODO: modifica il codice per renderlo più scalabile (con più di un certificato)
  return (
    <div className="flex items-center rounded-xl border border-lines-color w-fit p-3 gap-3">
      <div className="w-fit h-10 aspect-square">
        <img
          src={epicodeLogo}
          alt="company_logo"
          className="h-full aspect-square object-cover rounded-full"
        />
      </div>
      <div className="w-full">
        {" "}
        <a
          href={graduation}
          download={"graduation-certificate"}
          target="_blank"
        >
          <button>_download</button>
        </a>
      </div>
    </div>
  );
};

export default CertificatePreview;
