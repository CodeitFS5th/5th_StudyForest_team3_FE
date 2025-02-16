import Modal from "@/components/modal/Modal";

//배열로 id, name 새로 생성id="null" name
export default async function TodayHabitHead() {
  return (
    <div className="flex justify-center ">
      <p className="text-[18px] md:text-[24px] font-extrabold">오늘의 습관</p>
      {/*
            //모달 부분 버튼
            <div>
              <Modal ref={authModalRef}>목록 수정</Modal>
              <HabitList studyId={1}, onClose={openModal} />
            </div> */}
    </div>
  );
}
