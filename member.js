function skillsMember(member) {
    if (!member || !member.skills) {
        return [];
    }
    return member.skills;
}

// Example usage:
const member = {
    name: 'John Doe',
    skills: ['JavaScript', 'React', 'Node.js']
};

console.log(skillsMember(member)); // Output: ['JavaScript', 'React', 'Node.js']