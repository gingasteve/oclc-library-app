import {
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

export default function BookTable(props) {
  function renderBook(book) {
    return (
      <TableRow key={book.id}>
        <TableCell>
          <IconButton
            onClick={() => {
              props.setBooks(props.books.filter((b) => b.id !== book.id));
            }}
          >
            <DeleteIcon />
          </IconButton>
        </TableCell>
        <TableCell>{book.title}</TableCell>
        <TableCell>{book.subject}</TableCell>
      </TableRow>
    );
  }

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell></TableCell>
          <TableCell>Title</TableCell>
          <TableCell>Subject</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>{props.books.map(renderBook)}</TableBody>
    </Table>
  );
}

BookTable.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.object({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      subject: PropTypes.string.isRequired,
    })
  ),
  setBooks: PropTypes.func.isRequired,
};
