import React from "react";
import { useDrag } from "react-dnd";
import styles from "./styles.module.scss";

const CONSTRAINTS = { video: true };

export default function MainPage() {
  // export default function Card({ isDragging, text }) {
  //   const [{ opacity }, dragRef] = useDrag(
  //     () => ({
  //       type: ItemTypes.CARD,
  //       item: { text },
  //       collect: (monitor) => ({
  //         opacity: monitor.isDragging() ? 0.5 : 1
  //       })
  //     }),
  //     []
  //   )
  //   return (
  //     <div ref={dragRef} style={{ opacity }}>
  //       {text}
  //     </div>
  //   )
  // }
  return (
    <div className={`${styles.cardContainer} grid-cols-4`}>
      <div className="flex bg-white w-32 h-32 text-blue-600">hi</div>
      <button className="bg-green">install</button>
    </div>
  );
}
