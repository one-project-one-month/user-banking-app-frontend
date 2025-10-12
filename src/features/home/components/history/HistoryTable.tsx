import CustomTable from "@/components/common/table/CustomTable";
import type { Column } from "@/types/Table";
import { useMemo } from "react";

function HistoryTable() {
  const data = [
    {
      date: "2025-10-10",
      time: "09:42 AM",
      from: "John Carter",
      to: "Emma Brooks",
      "account number": "0021456789",
      amount: "₱12,500.00",
      note: "Project payment",
      paymentType: "Bank Transfer",
    },
    {
      date: "2025-10-09",
      time: "03:25 PM",
      from: "Liam Cruz",
      to: "Noah Smith",
      "account number": "0019876543",
      amount: "₱8,200.00",
      note: "Freelance work",
      paymentType: "GCash",
    },
    {
      date: "2025-10-08",
      time: "11:10 AM",
      from: "Mia Johnson",
      to: "Sophia Reyes",
      "account number": "0091234567",
      amount: "₱3,500.00",
      note: "Gift",
      paymentType: "Cash",
    },
    {
      date: "2025-10-07",
      time: "06:45 PM",
      from: "Daniel Lee",
      to: "Olivia Brown",
      "account number": "0076543210",
      amount: "₱25,000.00",
      note: "Rent payment",
      paymentType: "Online Banking",
    },
    {
      date: "2025-10-06",
      time: "02:18 PM",
      from: "James Wilson",
      to: "Ava Martinez",
      "account number": "0045678901",
      amount: "₱6,750.00",
      note: "Reimbursement",
      paymentType: "Check",
    },
  ];

  const columns = useMemo<Column<any>[]>(
    () => [
      {
        key: "date",
        label: "Date",
      },
      {
        key: "time",
        label: "Time",
      },
      {
        key: "from",
        label: "From",
      },
      {
        key: "to",
        label: "To",
      },
      {
        key: "account number",
        label: "Account Number",
      },
      {
        key: "amount",
        label: "Amount",
      },
      {
        key: "note",
        label: "Note",
      },
    ],
    []
  );

  return (
    <div>
      <CustomTable columns={columns} body={data} isEditColunm={false} />
    </div>
  );
}

export default HistoryTable;
