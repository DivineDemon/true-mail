import {
  ArrowUpDown,
  CircleHelp,
  CreditCard,
  History,
  LogOut,
  MailSearch,
  Receipt,
  User,
  Wallet,
} from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";

import { dashNavItems } from "@/lib/constants";
import { cn } from "@/lib/utils";
import type { RootState } from "@/store";
import { setMode } from "@/store/slices/global";

import MaxWidthWrapper from "../max-width-wrapper";
import { ModeToggle } from "../mode-toggle";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Switch } from "../ui/switch";

const Navbar = () => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const { mode } = useSelector((state: RootState) => state.global);

  const toggleValidationMode = () => {
    if (mode === "single") {
      dispatch(setMode("bulk"));
    } else {
      dispatch(setMode("single"));
    }
  };

  return (
    <nav className="z-[2] h-16 w-full border-b p-3.5">
      <MaxWidthWrapper className="grid h-full grid-cols-3 items-center justify-center">
        <div className="col-span-1 flex h-full w-full items-center justify-start">
          <MailSearch className="dark:fill-primary text-primary size-8 dark:text-white" />
        </div>
        <div className="col-span-1 flex w-full items-center justify-center gap-10">
          {dashNavItems.map((item) => (
            <Link
              to={item.link}
              key={item.id}
              className={cn(
                "cursor-pointer font-medium transition-all duration-200 ease-in-out hover:font-semibold",
                {
                  "text-primary": pathname
                    .replace("/", "")
                    .includes(item.link.replace("/", "")),
                  "text-black/85 hover:text-black dark:text-white/85 dark:hover:text-white":
                    !pathname
                      .replace("/", "")
                      .includes(item.link.replace("/", "")),
                }
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="col-span-1 flex h-full w-full items-center justify-end gap-5 divide-x">
          <div className="flex h-full items-center justify-center gap-2.5 pr-5">
            <span className="text-muted-foreground text-xs font-medium">
              Single
            </span>
            <Switch
              checked={mode === "bulk"}
              onCheckedChange={toggleValidationMode}
            />
            <span className="text-muted-foreground text-xs font-medium">
              Bulk
            </span>
          </div>
          <div className="h-full pr-5">
            <ModeToggle />
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <div className="flex items-center justify-center gap-2.5">
                <div className="flex flex-col items-center justify-center gap-1.5">
                  <span className="w-full text-right text-[16px] leading-[16px] font-semibold">
                    Mushood Hanif
                  </span>
                  <span className="text-muted-foreground w-full text-right text-[10px] leading-[10px]">
                    100 Credits Remaining
                  </span>
                </div>
                <img
                  src="https://ui.shadcn.com/avatars/04.png"
                  className="size-9 rounded-full border shadow"
                />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link
                  to="/dashboard/profile"
                  className="flex items-center gap-2"
                >
                  <User />
                  Profile
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem disabled={true} title="Coming Soon">
                <ArrowUpDown />
                Integration
              </DropdownMenuItem>
              <DropdownMenuSub>
                <DropdownMenuSubTrigger>
                  <div className="flex w-full items-center justify-start gap-2">
                    <Wallet className="text-muted-foreground size-4" />
                    <span>Billing</span>
                  </div>
                </DropdownMenuSubTrigger>
                <DropdownMenuPortal>
                  <DropdownMenuSubContent>
                    <DropdownMenuItem>
                      <Link
                        className="flex w-full items-center justify-start gap-2"
                        to="/dashboard/billing/payment"
                      >
                        <CreditCard />
                        Payment Information
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link
                        className="flex w-full items-center justify-start gap-2"
                        to="/dashboard/billing/invoices"
                      >
                        <Receipt />
                        Invoices
                      </Link>
                    </DropdownMenuItem>
                  </DropdownMenuSubContent>
                </DropdownMenuPortal>
              </DropdownMenuSub>
              <DropdownMenuItem disabled={true} title="Coming Soon">
                <History />
                History
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link
                  className="flex w-full items-center justify-start gap-2"
                  to="/dashboard/help"
                >
                  <CircleHelp />
                  Help
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-destructive group">
                <LogOut className="text-destructive group-hover:text-black dark:group-hover:text-white" />
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;
