import { Link } from "@nextui-org/link";


export const Footer = () => {

  return (
    <>
      <footer className="w-full flex flex-col items-center justify-center py-3">
        <span>
          Copyright © xxxxxxxxx有限公司
        </span>
        <Link
          isExternal
          className="flex items-center gap-1 text-current"
          href="https://beian.miit.gov.cn/"
          title="nextui.org homepage"
        >
          <span className="text-default-600">测试备案号</span>
        </Link>
      </footer>
    </>
  );
};
