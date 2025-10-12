import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { cn } from "@/lib/utils";
import { Fragment } from "react";
import { Link } from "react-router-dom";

type CustomBreadCrumbProps = {
  currentPageTitle: string;
  links: { name: string; path: string }[];
  currentTitleClassName?: string;
  linkTitleClassName?: string;
};

function CustomBreadCrumb({
  currentPageTitle,
  links,
  currentTitleClassName,
  linkTitleClassName,
}: Partial<CustomBreadCrumbProps>) {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        {links?.map((item, index) => (
          <Fragment key={index}>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link
                  to={item.path}
                  className={cn(
                    "text-white/70 hover:text-white",
                    linkTitleClassName
                  )}
                >
                  {item.name}
                </Link>
              </BreadcrumbLink>
              <BreadcrumbSeparator />
            </BreadcrumbItem>
          </Fragment>
        ))}
        <BreadcrumbItem>
          <BreadcrumbPage className={cn("text-white", currentTitleClassName)}>
            {currentPageTitle}
          </BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}

export default CustomBreadCrumb;
