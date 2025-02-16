import Avatar from "@/components/lowLevel/home/avatar"
import Bio from "@/components/lowLevel/home/bio"
import Skills from "@/components/lowLevel/home/skills"

export default function home() {
  return (
    <>
      <section id="home" className="p-6 flex flex-col gap-12 justify-center items-center h-screen">
        <Avatar />
        <Bio />
        <Skills />
      </section>
    </>
  );
}
