# TypeScrip-ReduxToolkit 기반 ToDoList

<img src="https://user-images.githubusercontent.com/78889402/193385840-70c28aaa-1c9b-4512-8180-a86594c764ea.mov">



## 1️⃣ 목적
TypeScrip, Redux-toolkit에 익숙해지기

## 2️⃣ 현재 구현 기능
추가 기능, 삭제 기능, 전체삭제 기능, 완료한 거 체크 기능, 메모 기능, localStorage에 저장 기능

## 3️⃣ 추후 추가 기능
droganddrop 기능, 명언 기능, 현재 시각 기능

## 4️⃣ 기억에 남는 코드
<details>
<summary><b>event, button도 타입지정</b></summary>
<div markdown="1">

```javascript
function onSubmit(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();
  dispatch(add(text));
  setText("");
}

function onChange(e: React.ChangeEvent<HTMLInputElement>) {
  setText(e.target.value);
}
```

</div>
</details>


<details>
<summary><b>Redux-toolkit의 타입지정 -> 초기값, action, RootState, Dispatch</b></summary>
<div markdown="1">

```javascript
// 초기값 타입지정
export interface ToDoType {
  text: string;
  id: number;
  completed: boolean;
}

const initialState: ToDoType[] = JSON.parse(
  localStorage.getItem("toDos") || "{}"
);

// action 타입지정
action: PayloadAction<string>
action: PayloadAction<{ id: number; completed: boolean }

// RootState는 store에서
export type RootState = ReturnType<typeof store.getState>;
```

</div>
</details>

<details>
<summary><b>localStorage 타입지정 -> 왜 "[]" 도 해줘야하는지?</b></summary>
<div markdown="1">

- JSON.parse의 타입은 string에 의존한다.
- 그러나 로컬스토리지 리턴 타입은 `string|null` 이다. 그러므로 둘 다 있어야한다.
- 내가 데이터를 선언하고, 내가 컴포넌트를 렌더할 때까지 그것의 값은 `null` 이다. 그리고 그 다음 getItem을 하니 그때 값을 얻는거고 그리고나서 `string` 이 되는거다.


```javascript
const initialState: MemoType = JSON.parse(
  localStorage.getItem("toDoMemo") || "[]"
);

```

</div>
</details>


<details>
<summary><b>localStorage 기능 구현은 store에서!</b></summary>
<div markdown="1">

처음에는 store에서 하는지 몰랐다. 생각해보니 초기값부터 로컬스토리지에 저장해줘야 할 것 같았고 store에서 했더니 됐다.


</div>
</details>


<details>
<summary><b>체크박스 기능 구현, 커스텀</b></summary>
<div markdown="1">

```javascript
// 기능 구현
changeComplete(
  state,
  action: PayloadAction<{ id: number; completed: boolean }>
) {
  const index = state.findIndex((todo) => todo.id === action.payload.id);
  state[index].completed = action.payload.completed;
  localStorage.setItem("toDos", JSON.stringify(state));
}

// 커스텀
<label
  className={`${
    completed === true
      ? "border-[1px] after:content-['✔'] text-[9px]"
      : "border-[1px]"
     }
     inline-block mt-[14px] ml-[8px] w-[17px] h-[17px] border-[#797C84] `}
>
   <input
      className="hidden"
      type="checkbox"
      checked={completed}
      onChange={handleCompleteClick}
    />
</label>
```



</div>
</details>
