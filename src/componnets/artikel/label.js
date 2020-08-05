import React from "react";

const Label = (props) => {
  const { data } = props;
  return (
    <div className="card no-border shadows mb-3">
      <span className="text-label">Label</span>
      <div className="px-2 mb-3 card-label">
        {data.map((data, key) => (
          <span key={key} className="kategori-badge mx-1 mb-1">
            {data.name}
          </span>
        ))}
        {/* <span className="kategori-badge mx-1 mb-1">Otomotif</span>
        <span className="kategori-badge mx-1 mb-1">Kesehatan</span>
        <span className="kategori-badge mx-1 mb-1">Teknologi</span>
        <span className="kategori-badge mx-1 mb-1">Pendidikan</span>
        <span className="kategori-badge mx-1 mb-1">Hobi</span>
        <span className="kategori-badge mx-1 mb-1">Product</span> */}
      </div>
    </div>
  );
};

export default Label;
