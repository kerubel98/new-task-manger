import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
const todos = [
  {
    description: "report",
    dudet: "now",
    status: "closed",
    retated:"inbox",
    action: "action",
  },
];

const Todo = () => {
  return (
    <Table>
      <TableCaption>Taskes</TableCaption>
      <TableHeader>
        <TableRow>
          <TableCell>Task description</TableCell>
          <TableCell>Due date</TableCell>
          <TableCell>Sattues</TableCell>
          <TableCell>Related To</TableCell>
          <TableCell>Action</TableCell>
        </TableRow>
        </TableHeader>
        <TableBody>
          {todos.map((to) => {
            return (
              <TableRow>
                <TableCell>{to.description}</TableCell>
                <TableCell>{to.dudet}</TableCell>
                <TableCell>{to.status}</TableCell>
                <TableCell>{to.retated}</TableCell>
                <TableCell>{to.action}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
    </Table>
  );
};

export default Todo;
