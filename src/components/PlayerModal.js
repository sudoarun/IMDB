function PlayerModal({ trailer, title }) {
  return (
    <>
      <div
        className="modal fade"
        id="playerModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content bg-black">
            <div className="modal-header border border-0">
              <h5 className="modal-title text-white" id="exampleModalLabel">
                {title}
              </h5>
              <button
                type="button"
                className="btn-close rounded-circle bg-warning"
                data-mdb-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <iframe
                style={{ height: "60vh" }}
                className="w-100"
                src={trailer}
                title="YouTube video"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default PlayerModal;
