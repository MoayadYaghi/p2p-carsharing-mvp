export default function TxList({ txs }) {
  if (txs.length === 0) return null;

  return (
    <>
      <br />
      <br />
      Transaction done
      <br />
      {txs.map((item) => (
        <div key={item} className="alert alert-info mt-5">
          <div className="">
            <label>{item.hash}</label>
          </div>
        </div>
      ))}
    </>
  );
}
