import { type ReactNode } from "react";

type InfoBoxProps = {
  children: ReactNode;
  mode: "hint" | "warn";
};
type asideStylesProps = {
  base: string;
  hint: string;
  warn: string;
};
const asideStyles: asideStylesProps = {
  base: "p-4 my-2 rounded-md ",
  hint: "border border-green-400 text-green-400",
  warn: "border border-orange-400 text-orange-400",
};
function InfoBox({ children, mode }: InfoBoxProps) {
  // flexible component also include warning
  // default version of this component is in warn mode
  //   if (mode === "hint") {
  //     return (
  //       <aside>
  //         <p>{children}</p>
  //       </aside>
  //     );
  //   }
  return (
    <aside className={`${asideStyles.base} ${asideStyles[mode]}`}>
      {mode === "warn" ? (
        <p className="text-center text-xl mb-2 font-bold text-orange-400">
          Warn
        </p>
      ) : null}
      <p>{children}</p>
    </aside>
  );
}

export default InfoBox;
