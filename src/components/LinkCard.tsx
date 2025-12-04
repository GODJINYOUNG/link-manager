"use client";

type LinkCardProps = {
  title: string;
  url: string;
  thumbnail?: string;
  tags?: string[];
  onDelete: () => void;
};

export default function LinkCard({
  title,
  url,
  thumbnail,
  tags = [],
  onDelete,
}: LinkCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition cursor-pointer">
      {/* 썸네일 */}
      <div className="w-full h-40 bg-gray-100">
        {thumbnail ? (
          <img
            src={thumbnail}
            alt={title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400">
            이미지 없음
          </div>
        )}
      </div>

      {/* 카드 내용 */}
      <div className="p-4">
        {/* 제목 */}
        <h3 className="font-semibold text-lg text-gray-800 mb-1">{title}</h3>

        {/* URL */}
        <a
          href={url}
          target="_blank"
          className="text-blue-600 text-sm underline break-all"
        >
          {url}
        </a>

        {/* 태그 */}
        <div className="flex flex-wrap gap-2 mt-3">
          {tags.map((tag, i) => (
            <span
              key={i}
              className="px-2 py-1 text-xs bg-[#E5EEFF] text-[#5A6FF0] rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* 삭제 버튼 */}
        <button
          onClick={onDelete}
          className="mt-4 w-full py-2 rounded-md text-white bg-red-500 hover:bg-red-600"
        >
          삭제
        </button>
      </div>
    </div>
  );
}
