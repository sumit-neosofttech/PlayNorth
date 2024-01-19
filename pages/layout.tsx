import { Sidebar } from "../components";
import { ReactElement } from "react";
import { useGetMenuConfigQuery } from "../store/apiSlice/gameApi";
export default function Layout({ children }: { children: ReactElement }) {
  const { data } = useGetMenuConfigQuery({
    limit: "0",
    page: "0",
  });
  return (
    <>
      <Sidebar items={data?.sidebarLinks}>{children}</Sidebar>
    </>
  );
}
