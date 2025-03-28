import { Task } from '@/app/types/type';

const TaskItem = ({ task }: { task: Task }) => {
  return (
    <li className="text-[#3D3D3D] leading-[1.5] text-[14px] 2xl:text-[16px]">
      <div className="text-[#3D3D3D] leading-[1.5] text-[14px] 2xl:text-[16px]">
        <span>{task.title}:</span> {task.description}
      </div>
    </li>
  );
};

export default TaskItem;
