import Input from "@/components/atom/input";
import { MouseEventHandler, useState } from "react";
import styles from "./styles.module.scss";

export default function InterviewSetting() {
  const [value, setValue] = useState("");
  function onChange(x: string) {
    setValue(x);
  }
  function onClick(e: React.MouseEvent) {}
  const b = console.log(value);
  let cardElement = document.querySelector(".card");
  cardElement?.addEventListener("click", flip);

  function flip() {
    cardElement?.classList.toggle("flipped");
  }
  return (
    <>
      <Input placeHolder={"a"} abc={onChange} />
      <Input placeHolder={"b"} abc={onChange} />
      <Input placeHolder={"c"} abc={onChange} />
      <Input placeHolder={"d"} abc={onChange} />
      <div className="flex w-20 text-black h-20 bg-white">
        <div className={styles.Calendar}>
          <div className={styles.container}>
            <div className={styles.card}>
              <div className={styles.front}>
                <div className={styles.contentfront}>
                  <div className={styles.month}>
                    <table>
                      <tr className={styles.orangeTr}>
                        <th>M</th>
                        <th>T</th>
                        <th>W</th>
                        <th>T</th>
                        <th>F</th>
                        <th>S</th>
                        <th>S</th>
                      </tr>
                      <tr className={styles.whiteTr}>
                        <th></th>
                        <th>1</th>
                        <th>2</th>
                        <th>3</th>
                        <th>4</th>
                        <th>5</th>
                        <th>6</th>
                      </tr>
                      <tr className={styles.whiteTr}>
                        <th>7</th>
                        <th>8</th>
                        <th>9</th>
                        <th>10</th>
                        <th>11</th>
                        <th>12</th>
                        <th>13</th>
                      </tr>
                      <tr className={styles.whiteTr}>
                        <th>14</th>
                        <th>15</th>
                        <th>16</th>
                        <th>17</th>
                        <th>18</th>
                        <th>19</th>
                        <th>20</th>
                      </tr>
                      <tr className={styles.whiteTr}>
                        <th>21</th>
                        <th>22</th>
                        <th>23</th>
                        <th>24</th>
                        <th>25</th>
                        <th>26</th>
                        <th>27</th>
                      </tr>
                      <tr className={styles.whiteTr}>
                        <th>28</th>
                        <th>29</th>
                        <th>30</th>
                        <th>31</th>
                        <th></th>
                        <th></th>
                        <th></th>
                      </tr>
                    </table>
                  </div>
                  <div className={styles.date}>
                    <div className={styles.datecont}>
                      <div id="date"></div>
                      <div id="day"></div>
                      <div id="month"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.back}>
                <div className={styles.contentback}>
                  <div className={styles.backcontainer}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button onClick={onClick}>설정하기 </button>
      </div>
    </>
  );
}
