import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { DataGrid, GridColDef, GridCellParams, GridActionsCellItem } from "@mui/x-data-grid";

import { boardsState } from "../../context/boardState";
import { fetchBoards } from "../../api/boardApi";
import styled from "styled-components";
import { BoardResponse } from "../../types";
import { GridRowParams } from "@mui/x-data-grid";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const BoardTable = () => {
  const [boards, setBoards] = useRecoilState(boardsState);

  useEffect(() => {
    const getBoards = async () => {
      try {
        const data = await fetchBoards();
        setBoards(data);
      } catch (error) {
        console.error("fetch 실패", error);
      }
    };

    getBoards();
  }, [setBoards]);

  const handleEdit = (id: string | number) => {
    console.log(`Edit ${id}`);
    // 수정 로직 추가해ㅔ보세요
  };

  const handleDelete = (id: string | number) => {
    console.log(`Delete ${id}`);
    // 삭제 로직 추가추가
  };

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "writer", headerName: "작성자", width: 130 },
    { field: "title", headerName: "제목", width: 200 },
    { field: "content", headerName: "내용", width: 400 },
    { field: "createdAt", headerName: "생성일자", width: 180 },
    { field: "updatedAt", headerName: "수정일자", width: 180 },
    {
      field: "edit",
      headerName: "편집",
      width: 50,
      renderCell: (params: GridCellParams) => (
        <GridActionsCellItem
          icon={<EditIcon />}
          label="Edit"
          onClick={() => handleEdit(params.id)}
        />
      ),
    },
    {
      field: "delete",
      headerName: "삭제",
      width: 50,
      renderCell: (params: GridCellParams) => (
        <GridActionsCellItem
          icon={<DeleteIcon />}
          label="Delete"
          onClick={() => handleDelete(params.id)}
        />
      ),
    },
  ];

  return (
    <div style={{ height: 500, width: '100%', marginTop: 150 }}>
      <DataGrid
        rows={boards}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        pageSizeOptions={[5, 10]}
      />
    </div>
  );
};

export default BoardTable;

