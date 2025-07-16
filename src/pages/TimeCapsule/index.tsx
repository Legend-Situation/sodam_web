import { useState } from "react";
import * as S from "./style";
import { useNavigate } from "react-router-dom";
import {
  useTimeCapsuleListQuery,
  useCreateTimeCapsuleMutation,
  useOpenTimeCapsuleMutation,
  useMyGroupQuery,
} from "@/api";
import Footer from "@/components/Footer";
import Arrow from "@/assets/arrow.svg";

const TimeCapsule = () => {
  const navigate = useNavigate();
  const [isCreating, setIsCreating] = useState(false);
  const [newCapsule, setNewCapsule] = useState({
    title: "",
    content: "",
    openDate: "",
  });

  const { data: group } = useMyGroupQuery();
  const groupId = group?.data.groupId || 0;
  const { data: capsules } = useTimeCapsuleListQuery(groupId);
  const createCapsule = useCreateTimeCapsuleMutation();
  const openCapsule = useOpenTimeCapsuleMutation();

  const handleCreate = () => {
    if (newCapsule.title && newCapsule.content && newCapsule.openDate) {
      createCapsule.mutate({
        groupId,
        title: newCapsule.title,
        content: newCapsule.content,
        openDate: newCapsule.openDate,
        type: "text",
      });
      setNewCapsule({ title: "", content: "", openDate: "" });
      setIsCreating(false);
    }
  };

  const handleOpen = (capsuleId: number) => {
    openCapsule.mutate(capsuleId);
  };

  const canOpen = (openDate: string) => {
    return new Date() >= new Date(openDate);
  };

  const GoBack = () => navigate("/home");

  return (
    <S.Layout>
      <S.Header>
        <img src={Arrow} onClick={GoBack} style={{ cursor: "pointer" }} />
        <S.Title>추억 타임캡슐</S.Title>
        <S.CreateButton onClick={() => setIsCreating(true)}>+</S.CreateButton>
      </S.Header>

      <S.Content>
        <S.Description>
          소중한 추억을 미래의 특정 날짜에 열어볼 수 있어요! 💝
        </S.Description>

        {capsules?.data.capsules?.map((capsule: any) => (
          <S.CapsuleCard key={capsule.id}>
            <S.CapsuleHeader>
              <S.CapsuleTitle>{capsule.title}</S.CapsuleTitle>
              <S.CapsuleDate>
                {new Date(capsule.openDate).toLocaleDateString()}
              </S.CapsuleDate>
            </S.CapsuleHeader>
            <S.CapsuleStatus>
              {capsule.isOpened ? (
                <S.OpenedBadge>열림</S.OpenedBadge>
              ) : canOpen(capsule.openDate) ? (
                <S.OpenButton onClick={() => handleOpen(capsule.id)}>
                  열기
                </S.OpenButton>
              ) : (
                <S.LockedBadge>🔒 잠김</S.LockedBadge>
              )}
            </S.CapsuleStatus>
            {capsule.isOpened && (
              <S.CapsuleContent>{capsule.content}</S.CapsuleContent>
            )}
          </S.CapsuleCard>
        ))}
      </S.Content>

      {isCreating && (
        <S.Modal>
          <S.ModalContent>
            <S.ModalHeader>
              <S.ModalTitle>새 타임캡슐 만들기</S.ModalTitle>
              <S.CloseButton onClick={() => setIsCreating(false)}>×</S.CloseButton>
            </S.ModalHeader>
            <S.Input
              placeholder="제목을 입력하세요"
              value={newCapsule.title}
              onChange={(e) =>
                setNewCapsule({ ...newCapsule, title: e.target.value })
              }
            />
            <S.TextArea
              placeholder="미래의 우리에게 남길 메시지를 작성하세요"
              value={newCapsule.content}
              onChange={(e) =>
                setNewCapsule({ ...newCapsule, content: e.target.value })
              }
            />
            <S.DateInput
              type="date"
              value={newCapsule.openDate}
              onChange={(e) =>
                setNewCapsule({ ...newCapsule, openDate: e.target.value })
              }
            />
            <S.CreateCapsuleButton onClick={handleCreate}>
              타임캡슐 만들기
            </S.CreateCapsuleButton>
          </S.ModalContent>
        </S.Modal>
      )}

      <Footer />
    </S.Layout>
  );
};

export default TimeCapsule;