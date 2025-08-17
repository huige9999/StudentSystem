import request from "./request";

/**
 * 获取学生列表
 * @returns 
 */
export function getStuList() {
    return request({
        url: "/students",
        method: "GET",
    });
}

/**
 * 添加学生
 */
export function addStu(data) {
    return request({
        url: "/students",
        method: "POST",
        data,
    });
}

/**
 * 根据id获取学生详细信息
 */
export function getStuById(id) {
    return request({
        url: `/students/${id}`,
        method: "GET",
    });
}

/**
 * 根据id删除学生信息
 */
export function deleteStuById(id) {
    return request({
        url: `/students/${id}`,
        method: "DELETE",
    });
}

/**
 * 根据id修改学生信息
 */
export function updateStuById(id, data) {
    return request({
        url: `/students/${id}`,
        method: "PATCH",
        data,
    });
}
