import MainLogo from "../components/common/MainLogo";
import Partition from "../components/common/Partition";
import LoginForm from "../components/login/LoginForm";
import SocialLogin from "../components/signup/SocialLogin";
import { cls } from "../lib/utils";

export default function LoginPage({ onAnimation }: { onAnimation?: boolean }) {
  return (
    <div className="flex flex-col gap-10 py-8 px-6">
      <div
        className={cls(
          onAnimation ? "animate-logo-y-up" : "",
          "absolute top-0 h-screen py-8 left-0 right-0 -z-10"
        )}
      >
        <MainLogo />
      </div>
      <div
        className={cls(
          onAnimation ? "animate-fade-in" : "",
          "flex flex-col gap-7 pt-60"
        )}
      >
        <SocialLogin type="login" />
        <Partition description="회원가입에 필요한 기본정보를 입력해주세요." />
        <LoginForm />
      </div>
    </div>
  );
}
