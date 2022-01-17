import NextLink from "next/link";

interface SidebarLinkProps {
  href: string;
  Icon: React.ComponentType;
  active?: boolean;
}

export const SidebarLink: React.FC<SidebarLinkProps> = ({ href, Icon, active = false }) => {
  return (
    <li className={`flex justify-center cursor-pointer relative ${active ? "link__active" : ""}`}>
      <NextLink href={href}>
        <a>
          <Icon />
        </a>
      </NextLink>
    </li>
  );
};
