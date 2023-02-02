import React, { useState, useEffect, useCallback } from 'react'
import './usersList.scss'
import MaterialTable from '@material-table/core'

const UsersList = ({ bikerData }) => {
  const [showFilter, setshowFilter] = useState(false);
  const [show, setFilter] = useState(false);
  const [bikers, setBikers] = useState(bikerData?.data?.motos);
  const [filters, setFilters] = useState(["OcupadoF"]);
  const setFilterCheck = (e) => {
    let opt = e.target.id;
    const list = [...filters];
    if (list.includes(opt)) {
      let index = list.indexOf(opt);
      if (index > -1) {
        list.splice(index, 1);
        let newtest = bikerData?.data?.motos.filter((item, idx) => {
          return item.status === opt;
        });
        setBikers((prev) => {
          return [...prev, ...newtest];
        });
      }
    } else {
      list.push(opt);
    }
    setFilters(list);
  };
  const categCheck = useCallback((e) => {
    let newArr = e.categorias.split(",");
    return (
      <>
        <select name="categDropdown" id="categDropdown">
          {newArr.map((item) => {
            return <option value={item}>{item}</option>;
          })}
        </select>
      </>
    );
  }, []);
  const typeCheck = useCallback((e) => {
    switch (e.vtr) {
      case 1:
        return (
          <div className="typeRow" title="Time MP">
            <p className="typeIcon">MP</p>
            <i className="material-icons-outlined">circle</i>
          </div>
        );
      case 2:
        return (
          <div className="typeRow" title="Time MA">
            <p className="typeIcon">MA</p>
            <i className="material-icons-outlined">circle</i>
          </div>
        );
      case 0:
        return (
          <div className="typeRow" title="Time MF">
            <p className="typeIcon">MF</p>
            <i className="material-icons-outlined">circle</i>
          </div>
        );

      default:
        break;
    }
  }, []);
  const statusCheck = useCallback((e) => {
    switch (e.status) {
      case "Livre":
        return (
          <div className="statusRow" title="Livre">
            <i className="material-icons-outlined">check_circle_outline</i>
          </div>
        );
      case "OcupadoE":
        return (
          <div className="statusRow" title="Entregando">
            <i className="material-icons-outlined">schedule</i>
          </div>
        );
      case "OcupadoAc":
        return (
          <div className="statusRow" title="À Caminho">
            <i className="material-icons-outlined">pending</i>
          </div>
        );
      case "OcupadoF":
        return (
          <div className="statusRow" title="Ocupado">
            <i className="material-icons-outlined">remove_circle_outline</i>
          </div>
        );
      case "OcupadoAp":
        return (
          <div className="statusRow" title="Em Coleta">
            <i className="material-icons-outlined">arrow_circle_down</i>
          </div>
        );

      default:
        break;
    }
  }, []);
  const cols = [
    {
      title: "Nome",
      field: "nome",
      defaultSort: "asc",
    },
    {
      title: "Status",
      field: "status",
      headerStyle: {
        width: "20px",
      },
      cellStyle: {
        horizontalAlign: "center",
      },
      width: "10px",
      render: statusCheck,
    },
    {
      title: "Tipo",
      field: "vtr",

      width: "10px",
      render: typeCheck,
    },
  ];
  const options = {
    showTitle: false,
    draggable: false,
    // selection: true,
    filtering: show,
    toolbar: true,
    toolbarButtonAlignment: "left",
    // columnsButton: true,
    // exportButton: true,
    // exportAllData: true,
    pageSize: 20,
    padding: "dense",
  };
  // useEffect(() => {
  //   console.log(bikerData);
  // }, [bikerData]);

  useEffect(() => {
    filters.forEach((item) => {
      setBikers((prev) => {
        return prev.filter((biker) => biker.status !== item);
      });
    });
  }, [filters]);
  return (
    <>
      <div className="usersList">
        <MaterialTable
          columns={cols}
          data={bikers}
          options={options}
          components={{
            Toolbar: (props) => (
              <div className="MaterialTableToolbar">
                <div className="toolbarFiltro toolItem">
                  <i
                    className="material-icons-outlined"
                    onClick={() => setshowFilter((prev) => !prev)}
                  >
                    filter_list
                  </i>

                  {showFilter ? (
                    <div
                      className="janelaFiltro"
                      onMouseLeave={() => setshowFilter((prev) => !prev)}
                    >
                      <div
                        id="Livre"
                        className={`filterOption ${
                          filters.includes("Livre") && "checked"
                        }`}
                        onClick={(e) => setFilterCheck(e)}
                      >
                        Livre
                        <i className="material-icons-outlined">
                          check_circle_outline
                        </i>
                      </div>
                      <div
                        id="OcupadoF"
                        className={`filterOption ${
                          filters.includes("OcupadoF") && "checked"
                        }`}
                        onClick={(e) => setFilterCheck(e)}
                      >
                        Ocupado
                        <i className="material-icons-outlined">
                          remove_circle_outline
                        </i>
                      </div>
                      <div
                        id="OcupadoAp"
                        className={`filterOption ${
                          filters.includes("OcupadoAp") && "checked"
                        }`}
                        onClick={(e) => setFilterCheck(e)}
                      >
                        EmColeta
                        <i className="material-icons-outlined">
                          arrow_circle_down
                        </i>
                      </div>
                      <div
                        id="OcupadoAc"
                        className={`filterOption ${
                          filters.includes("OcupadoAc") && "checked"
                        }`}
                        onClick={(e) => setFilterCheck(e)}
                      >
                        À Caminho
                        <i className="material-icons-outlined">pending</i>
                      </div>
                      <div
                        id="OcupadoE"
                        className={`filterOption ${
                          filters.includes("OcupadoE") && "checked"
                        }`}
                        onClick={(e) => setFilterCheck(e)}
                      >
                        Entregando
                        <i className="material-icons-outlined">schedule</i>
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
                <div className="toolbarPesquisa toolItem">
                  <i
                    className="material-icons-outlined"
                    onClick={() => setFilter((prev) => !prev)}
                  >
                    youtube_searched_for
                  </i>
                </div>
              </div>
            ),
          }}
        />
      </div>
    </>
  );
};

export default UsersList
