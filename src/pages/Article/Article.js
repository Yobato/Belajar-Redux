import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../../App.css";
import {
  createArticle,
  deleteArticle,
  editArticle,
  getArticle,
} from "../../redux/action/articleAction";
import '../../App.css';

function Article() {
  const [judul, setJudul] = React.useState();
  const [penerbit, setPenerbit] = React.useState();
  const [id, setId] = React.useState();
  const dispatch = useDispatch();

  const { isLoading: loadingArticle, data: articleData } = useSelector(
    (state) => state.article
  );

  useEffect(() => {
    dispatch(getArticle());
  }, []);

  const resetForm = () => {
    setId('');
    setJudul('');
    setPenerbit('');
  };

  const handleSubmit = () => {
    const data = {
      judul,
      penerbit,
    };
    dispatch(createArticle(data));
    resetForm();
  };

  const handleEdit = (data) => {
    setId(data.id);
    setJudul(data.judul);
    setPenerbit(data.penerbit);
  };

  const handleEditSubmit = () => {
    const data = {
      judul,
      penerbit,
    };
    dispatch(editArticle(id, data));
    resetForm();
  };

  return (
    <div className="App">
      <header className="App-header">
        {loadingArticle
          ? "Loading"
          : articleData?.map((item) => (
              <h5 style={{ margin: 0 }}>
                <span style={{ marginRight: "10px" }} key={item.id}>
                  {`${item.judul} : ${item.penerbit}`}
                </span>
                <button type="button" onClick={() => handleEdit(item)}>
                  Edit
                </button>
                <button 
                  type="button"
                  onClick={() => dispatch(deleteArticle(item.id))}
                >
                  Delete
                </button>
                {id && id === item.id && (
                  <button type="button" onClick={() => resetForm()}>
                    Cancel
                  </button>
                )}
              </h5>
            ))}

        <input
          type="text"
          value={judul}
          onChange={(e) => setJudul(e.target.value)}
          placeholder="Judul Artikel"
        />
        <input
          type="text"
          value={penerbit}
          onChange={(e) => setPenerbit(e.target.value)}
          placeholder="Penerbit"
        />
        <button
          type="button"
          onClick={() => (id ? handleEditSubmit() : handleSubmit())}
        >
          {id ? "Update" : "Submit"}
        </button>
      </header>
    </div>
  );
}

export default Article;
