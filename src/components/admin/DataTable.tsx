import type { ReactNode } from "react";

interface DataTableProps<T> {
  data: T[];
  columns: {
    key: string;
    label: string;
    render?: (item: T) => ReactNode;
    className?: string;
  }[];
  emptyMessage?: string;
  emptyAction?: ReactNode;
}

export default function DataTable<T extends Record<string, unknown>>({
  data,
  columns,
  emptyMessage = "No data found.",
  emptyAction,
}: DataTableProps<T>) {
  if (data.length === 0) {
    return (
      <div className="py-12 text-center">
        <p className="text-sm dark:text-zhs-muted text-slate-500">
          {emptyMessage}
        </p>
        {emptyAction && <div className="mt-4">{emptyAction}</div>}
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left text-sm">
        <thead>
          <tr className="border-b dark:border-zhs-border border-slate-200">
            {columns.map((col) => (
              <th
                key={col.key}
                className={`px-4 py-3 font-medium dark:text-zhs-muted text-slate-500 ${col.className ?? ""}`}
              >
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item, i) => (
            <tr
              key={(item.id as string) ?? i}
              className="border-b dark:border-zhs-border/50 border-slate-100 transition-colors hover:dark:bg-zhs-dark-3/30 hover:bg-slate-50"
            >
              {columns.map((col) => (
                <td key={col.key} className={`px-4 py-3 ${col.className ?? ""}`}>
                  {col.render
                    ? col.render(item)
                    : (String(item[col.key] ?? ""))}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
